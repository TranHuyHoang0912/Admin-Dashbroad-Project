// Import các thành phần cần thiết từ thư viện MUI (Material-UI)
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

// Thành phần chính của trang Câu hỏi thường gặp (FAQ)
const FAQ = () => {
  // Lấy theme hiện tại (sáng/tối)
  const theme = useTheme();
  // Lấy bảng màu tương ứng với theme
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Tiêu đề trang FAQ */}
      <Header title="CÂU HỎI THƯỜNG GẶP" subtitle="Trang các câu hỏi thường gặp" />

      {/* Câu hỏi số 1 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Một câu hỏi quan trọng
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là phần nội dung giải thích cho câu hỏi này. Nội dung có thể là mô tả chi tiết hoặc hướng dẫn cụ thể.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Câu hỏi số 2 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Một câu hỏi quan trọng khác
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là phần nội dung giải thích cho câu hỏi này. Nội dung có thể là mô tả chi tiết hoặc hướng dẫn cụ thể.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Câu hỏi số 3 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Câu hỏi bạn yêu thích
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là phần nội dung giải thích cho câu hỏi này. Nội dung có thể là mô tả chi tiết hoặc hướng dẫn cụ thể.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Câu hỏi số 4 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Một câu hỏi ngẫu nhiên
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là phần nội dung giải thích cho câu hỏi này. Nội dung có thể là mô tả chi tiết hoặc hướng dẫn cụ thể.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Câu hỏi cuối cùng */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Câu hỏi cuối cùng
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Đây là phần nội dung giải thích cho câu hỏi này. Nội dung có thể là mô tả chi tiết hoặc hướng dẫn cụ thể.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
