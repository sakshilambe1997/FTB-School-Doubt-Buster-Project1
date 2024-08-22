import Parent from "../models/Parent.js";

const postParent = async (req, res) => {
    const { user, student } = req.body;

    const parent = new Parent({
        user,
        student,
    });

    try {
        const savedParent = await parent.save();

        res.status(201).json({
            success: true,
            message: "Parent created successfully",
            data: savedParent,
        });
    } catch (e) {
        res.status(404).json({
            success: false,
            message: e.message,
        });
    }
};

const getAllParent = async (req, res) => {
    try {
        const allParents = await Parent.find().sort({ createdAt: -1 });
        return res.json({
            success: true,
            message: "All Parent fetched successfully",
            data: allParents,
        });
    } catch (e) {
        return res.json({
            success: false,
            message: "Parents not found",
        });
    }
};

const getParentById = async (req, res) => {
    const { id } = req.params;
    try {
        const ParentId = await Parent.findById(id);
        if (!ParentId) {
            return res.status(404).json({
                success: false,
                message: "Parent not found",
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            message: "Parent found",
            data: ParentId,
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};


export { postParent, getAllParent, getParentById};
