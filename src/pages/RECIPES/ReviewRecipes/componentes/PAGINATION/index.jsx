import { Pagination, PaginationItem } from "@mui/material"
import *as Tag from '../../index.js'
export const PaginationComponent = ({
    recipes,
    itemsPerPage,
    currentPage,
    handlePageChange,
}) => {
    return (
        <>
            <Tag.Pagination
                spacing={2}
                sx={{
                    position: 'relative',
                    transition: '.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop:'5rem'
                }}
            >
                <Pagination
                    count={Math.ceil(recipes.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    renderItem={(item) => <PaginationItem {...item} />}
                />
            </Tag.Pagination>
        </>
    )
}