
import Im1 from '../../../images/mocks/foots/img1.jpeg';
import Im2 from '../../../images/mocks/foots/img2.jpeg';
import Im3 from '../../../images/mocks/foots/img3.png';
import Im4 from '../../../images/mocks/foots/img4.png';
import Im5 from '../../../images/mocks/foots/img5.jpeg';
import { Stack } from "@mui/system";
import * as Tag from "./styles";

export const ShowSlider = ({
}) => {
    return (
        <>
            <Tag.Carousel>
                <Tag.Title variant='h3'>
                    Seja bem vindo ao Recipes Food
                </Tag.Title>
                <Tag.Title variant='h5'>
                    Com alguém que sabe cozinhar porque a beleza acaba!
                </Tag.Title>
            </Tag.Carousel>
        </>
    )

}


