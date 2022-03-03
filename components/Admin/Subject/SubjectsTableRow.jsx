import { useRouter } from "next/dist/client/router";

const SubjectsTableRow = ({subject}) => {
    const router = useRouter();

    return (
        <tr
        onClick={(e) =>{router.push(`/admin/courses/edit/${subject.id}`, undefined, {shallow: true, scroll: false})}}
        className="cursor-pointer"
        key={subject.id}
      >
        <td className="border w-1/12 text-right">{subject.id}</td>
        <td className="border w-1/4 text-center">{subject.title}</td>
        <td className="border w-1/4 text-left">{subject.icon}</td>
      </tr>
    )
}

export default SubjectsTableRow;