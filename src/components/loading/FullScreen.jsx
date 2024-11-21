export default function FullScreenLoading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
            <div className="w-24 h-24 rounded-full border-8 border-sky-600 border-t-transparent animate-spin" />
        </div>
    )
}