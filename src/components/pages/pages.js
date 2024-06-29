import { Pagination } from "react-bootstrap"
import Container from "react-bootstrap/Container";
import "./pages.scss"

export default function Pages({ page, totalPages, changePage }) {
    return (
        <Container>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        page != 1 && (
                            <li class="page-item">
                                <a class="page-link" href="#top" onClick={() => changePage(1)} aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>

                                </a>
                            </li>
                        )

                    }
                    {page === 1 ? (
                        <li className="page-item disabled">
                            <a className="page-link" href="#top">Previous</a>
                        </li>
                    ) : (
                        <li className="page-item">
                            <a className="page-link" href="#top" onClick={() => changePage(page - 1)}>Previous</a>
                        </li>
                    )}
                    {
                        page !== 1 && (

                            <li className="page-item ">
                                <a className="page-link" href="#top" onClick={() => changePage(page - 1)}>{page - 1}</a>
                            </li>
                        )
                    }

                    <li className="page-item active">
                        <a className="page-link" href="#top" onClick={() => changePage(page)}>{page}</a>
                    </li>
                    {
                        page !== 500 && (
                            <li className="page-item">
                                <a className="page-link" href="#top" onClick={() => changePage(page + 1)}>{page + 1}</a>
                            </li>
                        )

                    }
                    {page === totalPages ? (
                        <li className="page-item disabled">
                            <a className="page-link" href="#top">Next</a>
                        </li>
                    ) : (
                        <li className="page-item">
                            <a className="page-link" href="#top" onClick={() => changePage(page + 1)}>Next</a>
                        </li>
                    )}
                    {
                        page !== totalPages && (<li class="page-item">
                            <a class="page-link" href="#top" onClick={() => changePage(500)} aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>)
                    }
                </ul>

            </nav>
        </Container>

    )
}