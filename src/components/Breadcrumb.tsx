import React from "react";
import { Link, useLocation } from "react-router-dom";

function generateBreadcrumbs(routePath: string): string {
  const route = routePath.split("/");
  const currPath = route[1];
  const idSlug: string | undefined = route[2];

  if (currPath === "about") {
    return "За нас";
  } else if (currPath === "services") {
    return "Услуги";
  } else if (route.length > 2 && route[2] === "woodwork") {
    return "Дървообработка";
  } else if (route.length > 2 && route[2] === "metalwork") {
    return "Металообработка";
  } else if (route.length > 2 && route[2] === "table-tops") {
    return "Плотове за маси";
  } else if (route.length > 2 && route[2] === "table-legs") {
    return "Крака за маси";
  } else if (route.length > 2 && route[2] === "finished-tables") {
    return "Готови маси";
  } else if (route.length > 2 && route[2] === "others") {
    return "Други";
  } 
  
  
  const pathName = currPath.charAt(0).toUpperCase() + currPath.slice(1);

  return idSlug ? pathName + " Details" : pathName;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const routePath = location.pathname;

  const pageTitle: string = generateBreadcrumbs(routePath) || "";

  return (
    <div className="breadcrumb-area dark-bg">
      <div className="breadcrumb-inner">
        <h2 className="text-white">{pageTitle}</h2>
      </div>
    </div>
  );
};

export default Breadcrumb;
