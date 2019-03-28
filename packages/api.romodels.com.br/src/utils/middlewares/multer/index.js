import multer from 'multer';

// Creating a multer storage, by not specifying a 'destination' property, we are telling multer to store files in the OS's '/tmp' temporary directory.
const storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});

// This function is for filtering the files that are being upload to only be the specified types of 'images'.
const imageFilter = function(req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

// Instantiating a multer instance, and passing our helper functions above to configure it properly, also passing a 'limit' property defining in 'bits' the size of limiting the uploaded file, in this case to 5mb.
const upload = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: { fileSize: 5000000 }
});

export default upload;
