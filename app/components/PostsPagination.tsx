'use client'

import { usePathname, useRouter, useSearchParams  } from 'next/navigation'
import { useCallback, useState } from 'react'

type PostsPaginationProps = {
  totalPages: number,
  page: number,
}

export default function PostsPagination({ totalPages, page }: PostsPaginationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [currentPage, setCurrentPage] = useState(page);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const onClick = (newPage: number) => {
    router.push(pathname + '?' + createQueryString('page', String(newPage)))
    setCurrentPage(newPage)
  }

  const renderPagination = () => {
    const paginationItems = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <li key={i}>
          <button
            onClick={() => onClick(i)}
            className={`py-2 px-4 border shadow ${
              i === currentPage
                ? 'bg-primary text-neutral-50'
                : ''
            } hover:bg-secondary`}
          >
            {i}
          </button>
        </li>
      );
    }

    return paginationItems;
  };

  return (
    <>
      <ul className="inline-flex -space-x-px text-base flex-row justify-center">
        <li>
          <button
            onClick={() => onClick(currentPage - 1)}
            className='py-2 px-4 border rounded-l-lg shadow disabled:opacity-50 hover:bg-secondary disabled:hover:bg-white' disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {renderPagination()}
        <li>
          <button
            onClick={() => onClick(currentPage + 1)}
            className='py-2 px-4 border rounded-r-lg shadow disabled:opacity-50 hover:bg-secondary disabled:hover:bg-white' disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
}
