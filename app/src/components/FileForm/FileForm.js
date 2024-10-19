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

    const handleClick = async (e) => {
        try {
            const endpoint = "/test_predict/";
            await fetch(endpoint)
                .then((response) => response.json())
                .then((data) => {document.getElementById("test").innerHTML = data; console.log(data)});
        }
        catch (err) {
            console.log(err);
        }

    }


    return (
        <div className="fileloader">
            <h1>Upload file</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="file" onChange={handleFileInputChange}/>
                </div>

                <button type="submit">Upload file</button>

            </form>

            <button onClick={handleClick}>Get predict</button>

            {file && <p>{file.name}</p>}
            <div id="test"></div>
        </div>
    );
}

export default FileForm;