
import Im1 from '../../../images/mocks/foots/img1.jpeg';
import Im2 from '../../../images/mocks/foots/img2.jpeg';
import Im3 from '../../../images/mocks/foots/img3.png';
import Im4 from '../../../images/mocks/foots/img4.png';
import Im5 from '../../../images/mocks/foots/img5.jpeg';
import { Stack } from "@mui/system";
import * as Tag from "./styles";

export const ShowSlider = ({
    wellcome,
    pathPagination,
    backgroundMuiStack,
    ...props
}) => {
    return (
        <>
            <Tag.Carousel
                {...props}
                sx={{
                    minHeight: "40%",
                    marginTop: "4.1rem",
                    ...props
                }}>
                <Tag.CardImage>
                    <Tag.Title variant='h3'>
                        {wellcome}
                    </Tag.Title>
                    <Tag.Title variant='h5'>
                        {pathPagination}
                    </Tag.Title>
                </Tag.CardImage>
            </Tag.Carousel>
        </>
    )

}


