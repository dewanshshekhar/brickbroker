"use client"
import { ChevronDown, Loader2 } from "lucide-react"

// Removed interface LoadMoreButtonProps

const LoadMoreButton = ({ onLoadMore, isLoading, currentCount, totalCount, itemType }) => {
  // Removed React.FC<LoadMoreButtonProps>
  if (currentCount >= totalCount) {
    return null
  }

  return (
    <div className="text-center mt-12">
      <div className="mb-4">
        <span className="text-sm text-[#7A7A7A] bg-[#F9F8F3] px-4 py-2 rounded-full border border-[#BC8664]/20">
          Showing {currentCount} of {totalCount} {itemType}
        </span>
      </div>

      <button
        onClick={onLoadMore}
        disabled={isLoading}
        className="bg-[#BC8664] hover:bg-[#A0734F] disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
      >
        {isLoading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Loading more {itemType}...
          </>
        ) : (
          <>
            <div className="p-1 border border-white/30 rounded-lg">
              <ChevronDown size={16} />
            </div>
            Load More {itemType}
          </>
        )}
      </button>
    </div>
  )
}

export default LoadMoreButton
