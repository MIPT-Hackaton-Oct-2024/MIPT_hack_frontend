import { useState } from "react";

function FileForm() {

    const [file, setFile] = useState(null);

    const handleFileInputChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file_upload", file);

        try {
            const endpoint = "/uploadfile/";
            const response = await fetch(endpoint, {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                console.log("File uploaded");
            }
            else {
                console.error("File failed")
            }
        }
        catch (err) {
            console.error(err);
        }
    }


    return (
        <div>
            <h1>Upload file</h1>

            <form onSubmit={handleSubmit}>
                <div style={{marginBottom: "20px"}}>
                    <input type="file" onChange={handleFileInputChange}/>
                </div>

                <button type="submit">Upload file</button>
            </form>

            {file && <p>{file.name}</p>}
        </div>
    );
}

export default FileForm;