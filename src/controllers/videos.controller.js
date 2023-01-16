const VideosServices = require('../services/videos.services');

const createVideo = async ( req, res ) => {
    try {
        const newVideo = req.body;
        const result = await VideosServices.create(newVideo);
        res.json({
            message: "creando un video",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
        error: error.message,
        details: error.stack,                
        });        
    }
};

const deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await VideosServices.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    createVideo,
    deleteVideo
}