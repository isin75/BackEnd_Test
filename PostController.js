import PostService from "./PostService.js"

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const postsAll = await PostService.getAll()
            return res.json(postsAll)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getById(req, res) {
        try {
            const postById = await PostService.getById(req.params.id)
            return res.json(postById)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async upDate(req, res) {
        try {
            const upDatePost = await PostService.upDate(req.body)
            return res.json(upDatePost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deletePost = await PostService.delete(req.params.id)
            return res.json(deletePost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new PostController()