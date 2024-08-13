import React from 'react';
import classNames from 'classnames';

function Upload() {
  const fileComponent = React.useRef();
  const [uploadedFiles, setUploadedFiles] = React.useState([]);
  const [drag, setDrag] = React.useState(false);

  const dragStartHandler = (event) => {
    event.preventDefault();
    setDrag(true);
  };

  const onDropHandler = (event) => {
    event.preventDefault();
    uploadFiles(event.dataTransfer.files);
    setDrag(false);
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    uploadFiles(event.target.files);
  };

  const uploadFiles = (files) => {
    let newElements =
      uploadedFiles === [] ? Array.from(files) : uploadedFiles.concat(Array.from(files));

    //фильтрация для повторяющихся файлов
    let table = {};
    newElements = newElements.filter(({ name }) => !table[name] && (table[name] = 1));
    setUploadedFiles(newElements);
  };

  const removeFile = (file) => {
    setUploadedFiles(uploadedFiles.filter((f) => f.name !== file.name));
  };

  return (
    <main className="main">
      <div className="main__container container">
        <form
          className={classNames('main__upload upload', {
            dragover: drag,
          })}
          id="upload-container"
          method="POST"
          action="send.php"
          onDragLeave={(e) => dragStartHandler(e)}
          onDragStart={(e) => dragStartHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
        >
          <input
            ref={fileComponent}
            onChange={handleOnChange}
            className="upload__input"
            id="file-input"
            type="file"
            name="file"
            multiple
            accept=".doc"
          />
          <label className="upload__btn" htmlFor="file-input">
            <svg
              className="upload__svg"
              id="upload-image"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            Выберите файл .doc
          </label>
          <span className="upload__text">или перетащите его сюда</span>
        </form>
        <section className="main__new-files files">
          <h2 className="files__title">Загруженные файлы:</h2>
          <ol className="files__list">
            {(uploadedFiles[0] &&
              uploadedFiles.map((item, index) => (
                <li className="files__item" key={`${item.name}_${index}`}>
                  <p className="files__name">{`${index + 1}. ${item.name}`}</p>
                  <div className="files__actions">
                    <button className="files__button button">Добавить в базу</button>
                    <button className="files__button" onClick={() => removeFile(item)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x-circle"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m15 9-6 6" />
                        <path d="m9 9 6 6" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))) || <p align="center">нет загруженных файлов</p>}
          </ol>
        </section>
      </div>
    </main>
  );
}

export default Upload;
