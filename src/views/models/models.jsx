import "./models.css";
import modelIcon from "../../assets/icons/model-box-icon.svg";
import uploadIcon from "../../assets/icons/upload-icon.svg";
import dotsIcon from "../../assets/icons/three-dot-icon.svg";
import eyeIcon from "../../assets/icons/eye-icon.svg";
import { useState } from "react";

const Models = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const handleCheckboxChange = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };
  const tableData = [
    {
      id: 1,
      fileName: "Architectural_CORE",
      fileVer: "ver:1",
      featureFile: "Architectural_CORE.json",
      size: "10,67mb",
      uploadDate: "27.09.2024 - 09:13",
      uploader: "Melih Özgürün",
    },
    {
      id: 2,
      fileName: "Arc_DOORS",
      fileVer: "ver:1",
      featureFile: "DOORS.json",
      size: "21,67mb",
      uploadDate: "27.09.2024 - 09:13",
      uploader: "Ayşe Demir",
    },
    {
      id: 3,
      fileName: "Architectural_FLOORS",
      fileVer: "ver:",
      featureFile: "Architectural_floors.json",
      size: "321,67mb",
      uploadDate: "27.09.2024 - 09:13",
      uploader: "Melih Özgürün",
    },
    {
      id: 4,
      fileName: "BASEMENT",
      fileVer: "ver:3",
      featureFile: "BASEMENT-1.json",
      size: "0,67mb",
      uploadDate: "27.09.2024 - 09:13",
      uploader: "Ayşe Demir",
    },
    {
      id: 5,
      fileName: "PARKING LOT",
      fileVer: "ver:3",
      featureFile: "PARKING-LOTS.json",
      size: "10,67mb",
      uploadDate: "27.09.2024 - 09:13",
      uploader: "Ayşe Demir",
    },
    {
      id: 6,
      fileName: "Architectural_Columns",
      fileVer: "ver:3",
      featureFile: "COLUMNS.json",
      size: "10,67mb",
      uploadDate: "27.09.2024 - 20:20",
      uploader: "Ahmet Yıldırım",
    },
    {
      id: 7,
      fileName: "Architectural_CORE",
      fileVer: "ver:3",
      featureFile: "Architectural_CORE.json",
      size: "10,67mb",
      uploadDate: "27.09.2024 - 09:13",
      uploader: "Melih Özgürün",
    },
  ];
  return (
    <div className="models">
      <div className="models-card">
        <div className="model-actions">
          <div className="model-left">
            <button
              className="show-model-btn"
              disabled={selectedRows.length > 0}
            >
              3D Modeli Göster{" "}
              <img
                src={modelIcon}
                alt="show-model-icon"
                className="show-model-icon"
              />
            </button>
            <button
              className="picked-model-btn"
              disabled={selectedRows.length === 0}
            >
              Seçili Modelleri Göster
            </button>
            {selectedRows.length > 0 && (
              <span
                className="remove-selected-btn"
                onClick={() => setSelectedRows([])}
              >
                Seçimleri Kaldır
              </span>
            )}
          </div>
          <div className="model-right">
            <span
              className={`model-quantity-btn ${
                selectedRows.length > 0 ? "disabled" : ""
              }`}
            >
              Metraj Bilgi Dosyasını Oluştur
            </span>
            <button
              className="model-upload-btn"
              disabled={selectedRows.length > 0}
            >
              Model Yükle{" "}
              <img
                src={uploadIcon}
                alt="model-upload-icon"
                className="model-upload-icon"
              />
            </button>
            <img
              src={dotsIcon}
              alt="more-icon"
              className={`more-icon-btn ${
                selectedRows.length > 0 ? "disabled" : ""
              }`}
            />
          </div>
        </div>
        <div className="model-table">
          <table>
            <thead>
              <tr className="head-tr">
                <th className="checkbox-th"></th>
                <th className="no-th">No</th>
                <th>Dosya Adı</th>
                <th>Özellik Dosyası</th>
                <th>Boyutu</th>
                <th>Yüklenme Tarihi</th>
                <th className="icon-th">Görüntüle</th>
                <th className="icon-th">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={item.id}
                  className={selectedRows.includes(item.id) ? "active" : ""}
                >
                  <td className="checkbox-td">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                  <td className="no-td">{index + 1}</td>
                  <td>
                    <div className="file-section">
                      {item.fileName} <span>{item.fileVer}</span>
                    </div>
                  </td>
                  <td>{item.featureFile}</td>
                  <td>{item.size}</td>
                  <td>
                    <div className="upload-section">
                      {item.uploadDate}
                      <span>{item.uploader}</span>
                    </div>
                  </td>
                  <td className="icon-td">
                    <button className="view-button">
                      <img
                        src={eyeIcon}
                        alt="eye-mark-icon"
                        className="eye-mark-icon"
                      />
                    </button>
                  </td>
                  <td className="icon-td">
                    <button className="action-button">
                      <img
                        src={dotsIcon}
                        alt="more-icon"
                        className="table-more-icon"
                      />{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Models;
