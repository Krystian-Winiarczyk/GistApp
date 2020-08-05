export const fileUpload = (files) => {
  const filesArray = [];
  if (files) {
    for (let file of files) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        filesArray.push({
          filename: file.name,
          content: e.target.result,
          lastModified: file.lastModified,
          size: file.size
        });
      };
      reader.readAsText(file);
    }
  }
  return filesArray;
};

export const prepareFiles = (files: []) => {

};

