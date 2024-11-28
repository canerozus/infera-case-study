import "./overall-view.css";
import checkIcon from "../../assets/icons/check-mark-icon.svg";
import replyIcon from "../../assets/icons/reply-icon.svg";
import aliPic from "../../assets/images/ali-photo.png";
import aysePic from "../../assets/images/ayse-photo.png";
import plusIcon from "../../assets/icons/plus-icon.svg";
import romaniaPic from "../../assets/images/romania-pic.jpg";
import carPic from "../../assets/images/car-back.png";
import arrowLeftIcon from "../../assets/icons/arrow-left-icon.svg";
import arrowRightIcon from "../../assets/icons/arrow-right-icon.svg";
import ProgressBar from "../../components/progress-bar/progress-bar";
import mapPhoto from "../../assets/images/map-photo.png";
import locationIcon from "../../assets/icons/location-mark-icon.svg";

const OverallView = () => {
  const cardInfo = [
    {
      title: "İşveren Firma",
      text: "Romanya İçişleri Bakanlığı",
    },
    {
      title: "Durumu",
      label: "Aktif",
      icon: checkIcon,
    },
    {
      title: "Tarihler",
      text: "07.02.2024 - 02.02.2026  - 726 gün",
    },
    {
      title: "Türü",
      text: "Üst yapı / HASTANE",
    },
    {
      title: "Ülke / Şehir",
      text: "Romanya / BÜKREŞ",
    },
    {
      title: "Adres",
      text: "Sectotur strada Argentina Nr.41",
    },
    {
      title: "Açıklama",
      text: "The Dimitrie Gretada Hospital Procets, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words ",
    },
  ];
  const commentInfo = [
    {
      name: "Ali Demir",
      date: "20 Dec 2021 - 05:47AM",
      comment:
        "I am getting message from customers that when they place order always get error message .",
      photo: aliPic,
    },
    {
      name: "Ayşe Yılmaz",
      date: "20 Dec 2021 - 05:47AM",
      comment:
        "Please be sure to check your Spam mailbox to see if your email filters have identified the email from Dell as spam.",
      photo: aysePic,
    },
    {
      name: "Ali Demir",
      date: "20 Dec 2021 - 05:47AM",
      comment:
        "I am getting message from customers that when they place order always get error message .",
      photo: aliPic,
    },
    {
      name: "Ali Demir",
      date: "20 Dec 2021 - 05:47AM",
      comment:
        "I am getting message from customers that when they place order always get error message .",
      photo: aliPic,
    },
  ];
  return (
    <div className="overall">
      <div className="overall-first">
        <div className="overall-info-card">
          <h3 className="card-title">Genel Bilgi</h3>
          <div className="card-content">
            {cardInfo.map((item) => {
              return (
                <div className="card-info">
                  <span className="card-info-title">{item.title}</span>
                  {item.text && (
                    <span className="card-info-text">{item.text}</span>
                  )}
                  <div className="card-info-mark">
                    {" "}
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt="check-icon"
                        className="card-info-icon"
                      />
                    )}
                    {item.label && (
                      <span className="card-info-label">{item.label}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="overall-comment-card">
          <h3 className="card-title">Yorumlar</h3>
          <div className="comment-content">
            {commentInfo.map((item) => {
              return (
                <div className="comment-info">
                  <div className="comment-header">
                    <img
                      src={item.photo}
                      alt="user-photo"
                      className="comment-photo"
                    />
                    <span className="comment-info-name">{item.name}</span>
                    <span className="comment-info-date">{item.date}</span>
                  </div>
                  <div className="comment-body">
                    <div className="comment-info-text">{item.comment}</div>
                    <div className="comment-reply">
                      <img
                        src={replyIcon}
                        alt="reply-icon"
                        className="reply-icon"
                      />
                      <span className="reply-text">Reply</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="reply-content">
            <h3 className="reply-title">Yorum Bırakın</h3>
            <textarea
              className="reply-textarea"
              placeholder="Yorumunuzu Yazın"
            ></textarea>
            <button className="reply-button">Yorumu gönder</button>
          </div>
        </div>
      </div>
      <div className="overall-second">
        <div className="overall-gallery-card">
          <div className="gallery-header">
            <h3 className="card-title">Galeri</h3>
            <span className="plus-icon-span">
              <img src={plusIcon} alt="plus-icon" className="plus-icon" />
            </span>
          </div>
          <img src={romaniaPic} alt="big-img" className="gallery-big-img" />
          <div className="gallery-slider">
            <span className="gallery-slide-back">
              <img
                src={arrowLeftIcon}
                alt="arrow-left-icon"
                className="arrow-left-icon"
              />
            </span>
            <div className="small-images">
              <img src={carPic} alt="car-pic" className="small-pic" />
              <img
                src={romaniaPic}
                alt="car-pic"
                className="small-pic-active"
              />
              <img src={carPic} alt="car-pic" className="small-pic" />
              <img src={carPic} alt="car-pic" className="small-pic" />
            </div>
            <span className="gallery-slide-forward">
              <img
                src={arrowRightIcon}
                alt="arrow-right-icon"
                className="arrow-right-icon"
              />
            </span>
          </div>
        </div>
        <div className="overall-progress-card">
          <h3 className="card-title">Proje İlerleme Durumu</h3>
          <ProgressBar currentDay={120} totalDays={726} />
        </div>
        <div className="overall-map-card">
          <h3 className="card-title">Konum</h3>
          <img src={mapPhoto} alt="map-photo" className="map-photo" />
          <div className="location">
            <img
              src={locationIcon}
              alt="location-icon"
              className="location-icon"
            />
            <span className="location-adress">
              4522. Argentina, Santiago del Estero Province Arjantin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OverallView;
