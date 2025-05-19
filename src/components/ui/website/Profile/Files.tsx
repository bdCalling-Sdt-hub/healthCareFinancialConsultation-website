"use client";

import React, { useState, useEffect } from "react";
import { Table, Button, Upload, message, Spin, Modal } from "antd";
import { UploadOutlined, EyeOutlined, CloseOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  useGetFilesByUserIdQuery,
  useDownloadFileMutation,
  useCreateFileMutation,
} from "@/redux/apiSlices/filesSlice";
import { useGetUserProfileQuery } from "@/redux/apiSlices/authSlice";
import toast from "react-hot-toast";

interface FileData {
  key: string;
  name: string;
  size: string;
  uploadDate: string;
  rawDate: Date; // Added for sorting
}

interface ApiFileData {
  _id: string;
  originalName: string;
  mimeType: string;
  size: number;
  uploadedBy: {
    _id: string;
    name: string;
    email: string;
    profile: string;
  };
  uploadTimestamp: string;
  __v: number;
}

const Files: React.FC = () => {
  const [fileList, setFileList] = useState<FileData[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentFileName, setCurrentFileName] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  // RTK Query hooks
  const { data: userDetails, isLoading: isUserDetailsLoading } =
    useGetUserProfileQuery(undefined);
  const {
    data: filesResponse,
    isLoading: isFilesLoading,
    refetch,
  } = useGetFilesByUserIdQuery(userDetails?.data?._id);
  const [downloadFile, { isLoading: isDownloading }] =
    useDownloadFileMutation();
  const [createFile] = useCreateFileMutation();

  // Combine loading states
  const loading = isUserDetailsLoading || isFilesLoading;

  // Process files data when it's available
  useEffect(() => {
    if (filesResponse?.data && !isFilesLoading) {
      // Transform API data to match our component's format
      const formattedFiles = filesResponse.data.map((file: ApiFileData) => {
        const date = new Date(file.uploadTimestamp);
        return {
          key: file._id,
          name: file.originalName,
          size: formatFileSize(file.size),
          uploadDate: date.toLocaleDateString(),
          rawDate: date, // Store the actual date object for sorting
        };
      });

      // Sort files by date (newest first)
      const sortedFiles = formattedFiles.sort(
        (a: any, b: any) => b.rawDate.getTime() - a.rawDate.getTime()
      );

      setFileList(sortedFiles);
    }
  }, [filesResponse, isFilesLoading]);

  const handleView = async (fileId: string, fileName: string) => {
    try {
      setCurrentFileName(fileName);

      // Call the download API to get the file blob
      const blob = await downloadFile(fileId).unwrap();

      // Create a URL for the blob
      const url = URL.createObjectURL(blob);
      setSelectedPdf(url);
      setIsViewerOpen(true);
    } catch (error) {
      console.error("Error downloading file:", error);
      toast.error("Failed to download the file");
    }
  };

  const handleCloseViewer = () => {
    // Revoke the object URL to free up memory
    if (selectedPdf) {
      URL.revokeObjectURL(selectedPdf);
    }
    setSelectedPdf(null);
    setIsViewerOpen(false);
  };

  const columns: ColumnsType<FileData> = [
    {
      title: "S.No",
      key: "serialNumber",
      width: 70,
      render: (_, __, index) => <span>{index + 1}</span>,
    },
    {
      title: "File Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span className="text-[#032237] font-medium">{text}</span>
      ),
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Upload Date",
      dataIndex: "uploadDate",
      key: "uploadDate",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() => handleView(record.key, record.name)}
            className="text-blue-600"
          />
        </div>
      ),
    },
  ];

  const handleUpload = async (options: any) => {
    const { file, onSuccess, onError } = options;

    try {
      setUploading(true);

      // Create FormData and append the file
      const formData = new FormData();
      formData.append("file", file);

      // Add user ID if available
      if (userDetails?.data?._id) {
        formData.append("userId", userDetails.data._id);
      }

      // Call the createFile mutation
      const response = await createFile(formData).unwrap();

      if (response.success) {
        message.success(`${file.name} uploaded successfully`);
        onSuccess(response, file);
        refetch(); // Refresh the file list
      } else {
        message.error(response.message || "Upload failed");
        onError(new Error(response.message || "Upload failed"));
      }
    } catch (error: any) {
      console.error("Error uploading file:", error);
      message.error(
        `${file.name} upload failed: ${error.message || "Unknown error"}`
      );
      onError(error);
    } finally {
      setUploading(false);
    }
  };

  const uploadProps: UploadProps = {
    name: "file",
    accept: ".pdf",
    showUploadList: false,
    customRequest: handleUpload,
    beforeUpload: (file) => {
      const isPDF = file.type === "application/pdf";
      if (!isPDF) {
        message.error(`${file.name} is not a PDF file`);
        return Upload.LIST_IGNORE;
      }
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        message.error("File must be smaller than 10MB!");
        return Upload.LIST_IGNORE;
      }
      return true;
    },
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#032237]">My Documents</h1>
        <Upload {...uploadProps}>
          <Button
            icon={<UploadOutlined />}
            className="bg-gradientBg hover:bg-[#a88a4c] border-none text-black"
            loading={uploading}
          >
            Upload PDF
          </Button>
        </Upload>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={fileList}
          rowKey="key"
          pagination={{ pageSize: 5 }}
          locale={{ emptyText: "No files uploaded yet" }}
          className="border border-gray-200 rounded-lg"
        />
      )}

      <div className="mt-4 text-gray-500 text-sm">
        <p>* Only PDF files are supported</p>
        <p>* Maximum file size: 10MB</p>
      </div>

      {/* PDF Viewer Modal */}
      <Modal
        title={currentFileName}
        open={isViewerOpen}
        onCancel={handleCloseViewer}
        footer={null}
        width="80%"
        style={{ top: 20 }}
        bodyStyle={{ height: "80vh", padding: 0 }}
        closeIcon={<CloseOutlined className="text-black" />}
      >
        {isDownloading ? (
          <div className="flex justify-center items-center h-full">
            <Spin size="large" />
          </div>
        ) : (
          selectedPdf && (
            <iframe
              src={selectedPdf}
              title="PDF Viewer"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          )
        )}
      </Modal>
    </div>
  );
};

export default Files;
