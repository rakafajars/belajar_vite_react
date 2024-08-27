interface CardProps {
    name: string;
    age: number;
    gender: "male" | "female";
}

export const Card = (props: CardProps) => {
    const { name, age, gender } = props;

    //  return (
    //     <div>
    //         <div>Name : {props.name}</div>
    //         <div>Gender : {props.gender}</div>
    //         <div>Age : {props.age}</div>
    //     </div>

    // )

    // if (gender == "female") {
    //     return (
    //         <div style={{background: "pink"}}>
    //             <div>Name : {name}</div>
    //             <div>Gender : {gender}</div>
    //             <div>Age : {age}</div>
    //         </div>
    //     );
    // }

    //   return (
    //     <div style={{ background: gender === "female" ? "pink" : "skyblue" }}>
    //       <div>Name : {name}</div>
    //       <div>Gender : {gender}</div>
    //       <div>Age : {age}</div>
    //     </div>
    //   );

    const bgColor = gender === "female" ? "pink" : "skyblue";


    return (
        <div style={{ background: bgColor }}>
            <div>Name : {name}</div>
            <div>Gender : {gender}</div>
            <div>Age : {age}</div>
        </div>
    );
};
