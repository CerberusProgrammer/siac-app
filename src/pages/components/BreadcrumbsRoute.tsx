import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function BreadcrumbsRoute() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<ArrowForwardIosRounded fontSize="small" />}
    >
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="textPrimary" key={to}>
            {value}
          </Typography>
        ) : (
          <Link color="inherit" to={to} key={to}>
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
