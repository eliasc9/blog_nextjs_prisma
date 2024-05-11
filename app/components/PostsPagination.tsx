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
            className={`px-4 h-10 leading-tight border ${
              i === currentPage
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-500 bg-white border-gray-300'
            } hover:bg-gray-100`}
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
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button
            onClick={() => onClick(currentPage - 1)}
            className={`px-4 h-10 leading-tight border rounded-l-lg ${
              currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-gray-100'
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {renderPagination()}
        <li>
          <button
            onClick={() => onClick(currentPage + 1)}
            className={`px-4 h-10 leading-tight border rounded-r-lg ${
              currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-gray-100'
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
}
