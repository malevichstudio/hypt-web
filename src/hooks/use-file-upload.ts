import React from 'react';
import { useDropzone } from 'react-dropzone';

import { FileTypes, SelectedFileType } from '../types';

export const useFileUpload = (type: FileTypes) => {
  const [selectedFiles, setSelectedFiles] = React.useState<SelectedFileType[]>(
    [],
  );

  const getCurrentType = () => {
    if (type === FileTypes.video) return 'video/*';
    return 'image/*';
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: getCurrentType(),
    onDrop: (acceptedFiles: File[]) => {
      setSelectedFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview:
              type === FileTypes.video
                ? 'images/video.png'
                : URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  React.useEffect(
    () => () => {
      selectedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [selectedFiles],
  );

  const handleResetFiles = () => {
    setSelectedFiles([]);
  };

  const handleDeleteFile = (fileToDelete: SelectedFileType) => {
    setSelectedFiles((prev: SelectedFileType[]) =>
      prev.filter((file: SelectedFileType) => file !== fileToDelete),
    );
  };

  return {
    selectedFiles,
    onDeleteFile: handleDeleteFile,
    onResetFiles: handleResetFiles,
    getRootProps,
    getInputProps,
  };
};
