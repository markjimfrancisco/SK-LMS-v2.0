export default function FieldAlert ({classNames, message}) {
    return (
        <div
          // className="w-3/4 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          className={classNames}
          role="alert"
        >
          <strong className="font-bold">Oops!</strong>
          <br />
          <span className="block sm:inline">{message}</span>
        </div>
        )
}