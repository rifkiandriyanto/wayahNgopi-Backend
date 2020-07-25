const multer = require('multer')

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, './uploads')
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname)
  }
})

const fileFilter = (request, file, cb) => {
  const filemim = file.mimetype.toLowerCase()
  if (filemim === 'image/jpg' || filemim === 'image/png' || filemim === 'image/jpeg' || filemim === 'image/gif') {
    cb(null, true)
  } else {
    cb(new Error('File not support!'), false)
  }
}

const upload = multer({
  storage: storage,
  limits:
        {
          fileSize: 5 * 1024 * 1024
        },
  fileFilter: fileFilter
})

const uploadFile = upload.single('image')
module.exports = {
  uploadImage: uploadFile
}
