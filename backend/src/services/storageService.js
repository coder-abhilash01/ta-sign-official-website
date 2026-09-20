const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});


const uploadToImageKit = async (file) => {
    try {

        const result = await imagekit.upload({
            file: file.buffer,
            fileName: file.originalname,
            folder: "utilities",
        });

        return result;

    } catch (error) {

        console.error("ImageKit upload error:", error);

        throw new Error("File upload failed");
    }
};


const deleteFromImageKit = async (fileId) => {
    try {

        const result = await imagekit.deleteFile(fileId);

        return result;

    } catch (error) {

        console.error("ImageKit delete error:", error);

        throw new Error("File deletion failed");
    }
};


module.exports = {
    uploadToImageKit,
    deleteFromImageKit
};