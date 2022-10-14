import Post from "./Post.js"
import FileService from "./FileService.js"

class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture)
            const creatPost = await Post.create({...post, picture: fileName})
            return creatPost
    }

    async getAll() {
            const posts = await Post.find()
            return posts
    }

    async getById(id) {
        if (!id) {
            throw new Error('id not specified')
        }
            const posts = await Post.findById(id)
            return posts
    }

    async upDate(post) {
            if (!post._id) {
                throw new Error('id not specified')
            }
            const upDatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return upDatePost
    }

    async delete(id) {
            if (!id) {
                throw new Error('id not specified')
            }
            const deletePost = await Post.findByIdAndDelete(id)
            return deletePost
    }
}

export default new PostService