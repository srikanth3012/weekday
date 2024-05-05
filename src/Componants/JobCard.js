import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const JobCard = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false);

  const text = item?.jobDetailsFromCompany;

  return (
    <div>
      {" "}
      <Card
        sx={{
          m: 2,
          minWidth: 50,
          maxWidth: 330,
          minHeight: 200,
        }}
      >
        <CardContent>
          <Typography
            borderRadius={16}
            border="2px solid #D3D3D3"
            variant="h6"
            component="h6"
            sx={{
              width: 100,
              fontSize: 10,
              textAlign: "left",
              paddingInline: 3,
              marginBottom: 2,
            }}
          >
            posted 30 days ago
          </Typography>
          <Box display={"flex"} paddingY={1}>
            {" "}
            <CardMedia
              image={item?.logoUrl}
              title="companyLogo"
              style={{ width: 40, height: 40, borderRadius: 10, marginTop: 7 }}
            />
            <Box>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  width: 100,
                  fontSize: 11,
                  textAlign: "left",
                  paddingInline: 1,
                  paddingTop: 0.5,
                }}
              >
                {item?.companyName}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  width: 100,
                  fontSize: 14,
                  textAlign: "left",
                  paddingInline: 1,
                  paddingTop: 0.5,
                }}
              >
                {item?.jobRole}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  width: 100,
                  fontSize: 10,
                  textAlign: "left",
                  paddingInline: 1,
                  paddingY: 0.5,
                }}
              >
                {item?.location}
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"} paddingY={0.5}>
            <Typography
              color="textSecondary"
              sx={{
                fontSize: 14,
                textAlign: "left",
              }}
            >
              Estimate Salary :{item?.minJdSalary && item?.minJdSalary + "-"}
              {item?.maxJdSalary && item?.maxJdSalary} LPA
            </Typography>
            <CardMedia
              image="https://th.bing.com/th/id/OIP.ad_FFMgQRVzwZnLCUfg97QAAAA?pid=ImgDet&w=179&h=183&c=7&dpr=1.3"
              title="companyLogo"
              style={{
                width: 12,
                height: 12,
                borderRadius: 1,
                margin: 3,
              }}
            />
          </Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{ width: 150, fontSize: 15, textAlign: "left", paddingY: 0.5 }}
          >
            About Company:
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              width: 100,
              fontSize: 15,
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            About Us
          </Typography>

          {showFullText ? (
            <>
              <Typography
                sx={{
                  width: 300,
                  fontSize: 12,
                  textAlign: "left",
                  paddingRight: 5,
                }}
              >
                {text}
              </Typography>
              <Button
                onClick={() => setShowFullText(!showFullText)}
                sx={{ fontSize: 10 }}
              >
                Show less
              </Button>
            </>
          ) : (
            <Typography
              sx={{
                width: 300,
                fontSize: 12,
                textAlign: "left",
                paddingRight: 5,
              }}
            >
              {text.slice(0, Math.ceil(text.length * 0.4))}...
              <Button
                onClick={() => setShowFullText(!showFullText)}
                sx={{ fontSize: 10 }}
              >
                View Job
              </Button>
            </Typography>
          )}

          {item?.minExp && (
            <>
              {item?.minExp && (
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ width: 200, fontSize: 14, textAlign: "left" }}
                >
                  Minimum Experience
                </Typography>
              )}

              <Typography
                variant="h5"
                component="h2"
                sx={{ width: 100, fontSize: 14, textAlign: "left" }}
              >
                {item?.minExp} years
              </Typography>
            </>
          )}
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: 300,
            marginY: 2,
            paddingY: 1,
            background: ["#00D9DB"],
            color: "black",
          }}
        >
          Easy Apply
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: 300,
            marginBottom: 2,
            paddingY: 1,
            background: "darkblue",
          }}
        >
          Unlock referral asks
        </Button>
      </Card>
    </div>
  );
};

export default JobCard;
