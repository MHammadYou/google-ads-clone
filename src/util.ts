import fs from "fs";
import { promisify } from "util";

const deleteFile = promisify(fs.unlink);

enum Code {
  Ok,
  Error
}

const flashMsg = (req: any, msg: string, code: Code = Code.Ok) => {
  req.flash('message', msg);

  switch (code) {
    case Code.Ok:
      req.flash('code', 'ok');
      break;
    case Code.Error:
      req.flash('code', 'error');
      break;
  }
}

const getFlashMsg = (req: any) => {
  return {
    flash_message: req.flash('message'),
    flash_code: req.flash('code')
  }
}

export { deleteFile, getFlashMsg, flashMsg, Code };