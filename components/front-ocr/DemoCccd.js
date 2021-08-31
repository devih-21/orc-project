import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Icon from '@material-ui/core/Icon';

export default function DemoCccd(){

    const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
        setIsSelected(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('id_image', selectedFile);

		fetch(
			// '/api/proxy',
            'http://13.230.161.4:5000/ocr/upload',
			{
				method: 'GET',
				body: formData,
                mode: 'no-cors'
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

    return(
        <section id="face-analysis-content-section" className="page bg-style1">
            <div className="page-header-wrapper">
                <div className="container">
                    <div className="page-header text-center wow fadeInUp animated">
                        <h2>DEMO</h2>
                        <div className="devider"></div>
                        <p className="subtitle">
                            Hãy thử đọc chứng minh thư của bạn ngay bây giờ bằng cách tải lên một hình ảnh hoặc cung cấp một URL hình ảnh.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="button-direction">
                        <input
                            accept="image/*"
                            style={{display: "none"}}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={changeHandler}
                        />
                        <label htmlFor="contained-button-file">
                            <Button 
                                variant="contained" 
                                color="default" 
                                component="span"
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload
                            </Button>
                        </label>
                        {isSelected ? (
                            <Button
                                variant="contained" 
                                color="default" 
                                onClick={handleSubmission}
                            >
                                Submit
                            </Button>
                        ) : (
                            <p>Select a file to show details</p>
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}