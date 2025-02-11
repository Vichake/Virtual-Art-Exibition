import React, { useState } from "react";
import { getUser, resetUserSession } from '../service/AuthService';
import { useNavigate } from "react-router-dom";
import Header from './header';
import './premium.css';
import { s3 } from '../service/aws-config';

const FileUploadSection = ({ title, onFileSelect, onUpload, uploadedUrls }) => {
    return (
        <div className="upload-section">
            <h3>{title}</h3>
            <input type="file" multiple onChange={onFileSelect} />
            <button onClick={onUpload}>Upload Images</button>

            <div className="image-gallery">
                {uploadedUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Uploaded ${index}`} />
                ))}
            </div>
        </div>
    );
};

const PremiumContent = () => {
    const [selectedPublicFiles, setSelectedPublicFiles] = useState(null);
    const [selectedExhibitionFiles, setSelectedExhibitionFiles] = useState(null);
    const [uploadedPublicImageUrls, setUploadedPublicImageUrls] = useState([]);
    const [uploadedExhibitionImageUrls, setUploadedExhibitionImageUrls] = useState([]);
    
    const user = getUser();
    const name = user && user.name ? user.name : '';
    const navigate = useNavigate();

    const handlePublicFileInput = (event) => setSelectedPublicFiles(event.target.files);
    const handleExhibitionFileInput = (event) => setSelectedExhibitionFiles(event.target.files);

    const uploadPublicImages = () => uploadImages(selectedPublicFiles, setUploadedPublicImageUrls, 'arts123');
    const uploadExhibitionImages = () => uploadImages(selectedExhibitionFiles, setUploadedExhibitionImageUrls, 'premium-arts123');

    const uploadImages = (files, setUploadedUrls, bucketName) => {
        if (files) {
            Array.from(files).forEach((file) => {
                const params = {
                    Bucket: bucketName,
                    Key: file.name,
                    Body: file,
                    ContentType: file.type,
                };

                s3.upload(params, (err, data) => {
                    if (err) {
                        console.error(`Error uploading file to ${bucketName}:`, err);
                    } else {
                        setUploadedUrls((prevUrls) => [...prevUrls, data.Location]);
                    }
                });
            });
        }
    };

    const logoutHandler = () => {
        resetUserSession();
        navigate('/login');
    };

    return (
        <div>
            <Header />
            <h2>Hello {name}! Welcome to our website!!</h2>
            <button className="logout-btn" onClick={logoutHandler}>Logout</button>

            <FileUploadSection
                title="Upload Image for Public View"
                onFileSelect={handlePublicFileInput}
                onUpload={uploadPublicImages}
                uploadedUrls={uploadedPublicImageUrls}
            />

            <FileUploadSection
                title="Upload Image for Exhibition"
                onFileSelect={handleExhibitionFileInput}
                onUpload={uploadExhibitionImages}
                uploadedUrls={uploadedExhibitionImageUrls}
            />
        </div>
    );
};

export default PremiumContent;