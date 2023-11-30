import { S3Client } from "@aws-sdk/client-s3";
import multer, { diskStorage } from "multer";
import path from "path";
import multerS3 from "multer-s3";

// const storage = diskStorage({
//   destination: function (req, file, callback) {
//     const destination = path.join(__dirname, "uploads");
//     callback(null, destination);
//   },
//   filename: function (req, file, callback) {
//     let filename = file.originalname;
//     callback(null, filename);
//   },
// });

console.log(
  process.env.R2_ENDPOINT,
  process.env.R2_BUCKET,
  process.env.R2_S3_ACCESS_KEY_ID,
  process.env.R2_S3_SECRET_ACCESS_KEY
);

const s3 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT as string,
  credentials: {
    accessKeyId: process.env.R2_S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.R2_S3_SECRET_ACCESS_KEY as string,
  },
});

const storage = multerS3({
  s3,
  bucket: process.env.R2_BUCKET as string,
  acl: "public-read",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  metadata(req, file, callback) {
    callback(null, {
      size: file.size,
      mimetype: file.mimetype,
      encoding: file.encoding,
    });
  },
  key(req, file, callback) {
    let filename = file.originalname;
    callback(null, filename);
  },
});

export const instance = multer({ storage, preservePath: true });
