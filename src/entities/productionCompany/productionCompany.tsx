import { Image } from '@mantine/core';
import { Company } from '../../shared/types/types';
import imgPath from '../../shared/variables/variables';
import noPoster from '../../assets/noposter.svg';

type PropsType = {
    data: Company;
};

function ProductionCompany(props: PropsType) {
    const { data } = props;

    return (
        <div className="productionCompany">
            <Image src={`${imgPath}${data.logo_path}`} fallbackSrc={noPoster} />
            <div>{data.name}</div>
        </div>
    );
}

export default ProductionCompany;
