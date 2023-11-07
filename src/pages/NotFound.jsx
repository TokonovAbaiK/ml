import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../ui/CustomButton/CustomButton";
import "./notFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="center-content">
        <div className="error-container">
          <h4 className="ups-title">Упс...!</h4>
          <h1 className="error-title">Ошибка 404</h1>
        </div>
        <div className="text-container">
          <p>
            Эта страница не найдена, мы уже работаем, чтобы  ее
            восстановить!
          </p>
          <Link to="/">
            <CustomButton>Вернуться на главную</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
