import React, { useState } from "react";
import { TfiPlus } from "react-icons/tfi";
import { GoArrowUp} from "react-icons/go";
import { FaArrowDown } from "react-icons/fa6";

const Terms = () => { 
  const [show, setshow] = useState(false);
  return (
    <div className=" bg-white py-10">
        <div className=" flex flex-col items-center justify-center">
        <div className=" text-green py-5  border-[1px] border-blue border-opacity-20 bg-white px-5 flex cursor-pointer  items-center" onClick={()=>{setshow(!show)}}>
          {" "}
          {show ? (
            <GoArrowUp className=" mr-2" />
          ) : (
            <TfiPlus className=" mr-2" />
          )}{" "}
          Terms and Conditions
        </div>
       {show&& <div className=" w-[90%]  xl:w-[70%] 3xl:w-[50%] text-xl mt-40">
          <div>
            <h1 className=" mb-10 text-3xl sm:text-5xl font-bold   text-yellow ">Terms and Conditions</h1>
            <p className=" mb-5">This product is meant for educational purposes only. Any resemblance to real persons, living or dead is purely coincidental. Void where prohibited. Some assembly required. List each check separately by bank number. Batteries not included.</p>
            <p className=" mb-5">Contents may settle during shipment. Use only as directed. No other warranty expressed or implied. Do not use while operating a motor vehicle or heavy equipment. Postage will be paid by addressee. Subject to CARB approval.</p>
            <p className=" mb-5">This is not an offer to sell securities. Apply only to affected area. May be too intense for some viewers. Do not stamp. Not rated by the Motion Picture Association of America. Call for nutritional information. Use other side for additional listings.</p>
            <p className=" mb-5">Printed on recycled paper. For recreational use only. Do not disturb. All models over 18 years of age. Prize not redeemable for cash value. If condition persists, consult your physician. No user-serviceable parts inside. Freshest if eaten before date on carton.</p>
            <p className=" mb-5"> To be used as a supplementary restraint system only. Always fasten your safety belt. Subject to change without notice. Times approximate. Simulated picture. Do not staple or paper clip.Not responsible for direct, indirect, incidental or consequential damages resulting from any defect, error or failure to perform. Keep away from children. At participating locations only. Not the Beatles. Penalty for private use. See label for sequence. Price slightly higher east of Alaska. No postage necessary if mailed in the United States.</p>
            <p className=" mb-5">Do not X-ray. Breaking seal constitutes acceptance of agreement. For off-road use only. As seen on TV. One size fits all. Many suitcases look alike. Contains a substantial amount of non-tobacco ingredients. Colors may, in time, fade.</p>
            <p className=" mb-5"> We have sent the forms which seem right for you. Magnetic media, non-returnable if seal is broken. Formatted to fit your screen. Slippery when wet. For office use only. Not affiliated with the American Red Cross. Drop in any mailbox. Edited for television.</p>
            <p className=" mb-5">Keep cool, process promptly. Post office will not deliver without postage. List was current at time of printing. Return to sender, no forwarding order on file, unable to forward. Prolong exposure to vapors has caused cancer in laboratory animals.</p>
            <p className=" mb-5">Not responsible for direct, indirect, incidental or consequential damages resulting from any defect, error or failure to perform. Keep away from children. At participating locations only. Not the Beatles. Penalty for private use. See label for sequence.</p>
            <p className=" mb-5">Substantial penalty for early withdrawal. Do not write below this line. Falling rock. Lost ticket pays maximum rate. Phenylketonurics: contains phenylalnine. Your canceled check is your receipt. Add toner. Place stamp here.</p>
            <p className=" mb-5">Use only as directed; intentional misuse by deliberately concentrating and inhaling contents can be harmful or fatal. Avoid contact with skin. Road construction ahead. Open other end. Dealer participation may affect final price.</p>
            <p className=" mb-5">May not be present in all tap water. Sanitized for your protection. Be sure each item is properly endorsed. Sign here without admitting guilt. Slightly higher west of the Mississippi. Park at your own risk. Employees and their families and friends are not eligible. Beware of dog. </p>
            <p className=" mb-5">Contestants have been briefed on some questions before the show. Limited time offer, call now to ensure prompt delivery. You must be present to win. No passes accepted for this engagement. No purchase necessary. Processed at location stamped in code at top of</p>
            <p className=" mb-5">carton. Shading within a garment may occur. Keep away from fire or flames. See Uniform Code of Military Justice. Replace with same type. Approved for veterans. Booths for two or more. Indicates a low-fat item. Check here if tax deductible. Some equipment shown is optional.</p>
            <p className=" mb-5">Price does not include taxes. No Canadian coins. Tax, tag, and title not included in advertised price. Not recommended for children. Prerecorded for this time zone. Reproduction by mechanical or electronic means, including photocopying, is strictly prohibited.</p>
            <p className=" mb-5">No solicitors. No alcohol, dogs or horses. No anchovies unless otherwise specified. Avoid spraying into eyes. An 18% gratuity will be added for parties of 8 or more. Do not write under this line.</p>
          </div>
        </div>}
        </div>
    </div>
  )
}

export default Terms