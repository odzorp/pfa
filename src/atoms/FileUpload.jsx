import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);

    
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    } else {
    
      event.target.value = null;
      setPreviewUrl(null);
    }
  };

  const styles = {
    fileUploadContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      marginTop: '18px',
      overflow: 'hidden'
    },
    radialButtonContainer: {
      position: 'relative',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      overflow: 'hidden',
      background: '#B3B1FF',
      cursor: 'pointer',
    },
    radialButtonIcon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '24px',
      color: '#fff',
    },
    input: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: '0',
      cursor: 'pointer',
      zIndex: '2', // Bring the input above the preview
    },
    previewContainer: {
      position: 'absolute',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      overflow: 'hidden',
      top: '0',
      left: '0',
    },
    previewImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
    },
    uploadText: {
      marginTop: '10px',
      fontSize: '14px',
      color: 'rgba(24, 33, 38, 0.50)'
    },
  };

  return (
    <div style={styles.fileUploadContainer} >
      <label style={styles.radialButtonContainer}  >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={styles.input}
          className={styles.input}
        />
        <span style={styles.radialButtonIcon} >+</span>
      </label>
      {previewUrl && (
        <div style={styles.previewContainer} >
          <img
            src={previewUrl}
            alt="Preview"
            style={styles.previewImage}
            className= {styles.previewImage}
          />
        </div>
      )}
      <p style={styles.uploadText}>Upload a photo</p>
    </div>
  );
};

export default FileUpload;
