import { ReleaseLiability } from "./VolunteerElements/ReleaseLiability";
import { CodeOfConduct } from "./VolunteerElements/CodeOfConduct";
import { TripInfo } from "./VolunteerElements/TripInfo";

export const Volunteer = () => {
  return (
    <section>
      {/* <div>
        <h2>MISSIONARY VOLUNTEERS</h2>
          <p className = "my-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ad libero voluptatum illum quidem asperiores tempore quod vel 
            dignissimos ipsum molestias doloremque repellendus a error, 
            atque, iusto inventore suscipit autem quis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ad libero voluptatum illum quidem asperiores tempore quod vel 
            dignissimos ipsum molestias doloremque repellendus a error, 
            atque, iusto inventore suscipit autem quis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ad libero voluptatum illum quidem asperiores tempore quod vel 
            dignissimos ipsum molestias doloremque repellendus a error, 
            atque, iusto inventore suscipit autem quis.
          </p>
      </div> */}

      <div className="flex justify-center items-center flex-col gap-1.5 flex-wrap my-8 mx-0">
        <div>
          <ReleaseLiability />
        </div>
        <br />
        <div>
          <CodeOfConduct />
        </div>
        <br />
        <div>
          <TripInfo />
        </div>
      </div>
    </section>
  );
};
