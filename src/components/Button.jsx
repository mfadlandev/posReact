export default function Button(props) {
  const {variant = "edit"} = props;
  return (
    <button className={
        variant === "edit" ?
        "bg-blue-600 rounded-xl p-2 text-sm mx-2 w-14 font-semibold cursor-pointer tracking-tight text-white" : "bg-red-600 rounded-xl p-2 text-sm mx-2 font-semibold cursor-pointer tracking-tight text-white"}>
            {variant === "edit" ? "Edit" : "Delete"}
    </button>
  );
}
