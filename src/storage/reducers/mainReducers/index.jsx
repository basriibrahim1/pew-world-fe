import { combineReducers } from "redux";
import { DeleteChatReducers } from "../chat/deleteChatReduc";
import { GetChatReducers } from "../chat/getChatReduc";
import { IdChatReducers } from "../chat/IdChatReduc";
import { UpdateChatReducers } from "../chat/UpdateChatReduc";
import { DeletePengalamanReducers } from "../pengalaman/deletePengalamanReduc";
import { GetPengalamanReducers } from "../pengalaman/getPengalamanReduc";
import { IdPengalamanReducers } from "../pengalaman/IdPengalamanReduc";
import { UpdatePengalamanReducers } from "../pengalaman/updatePengalamanReduc";
import { GetPerusahaanReducers } from "../perusahaan/getPerusahaanReduc";
import { IdPerusahaanReducers } from "../perusahaan/idPerusahaanReduc";
import { UpdatePerusahaanReducers } from "../perusahaan/updatePerusahaanReduc";
import { DeletePortoReducers } from "../portofolio/deletePortoReduc";
import { GetPortoReducers } from "../portofolio/getPortoReduc";
import { IdPortoReducers } from "../portofolio/IdPortoReduc";
import { UpdatePortoReducers } from "../portofolio/updatePortoReduc";
import { DeleteSkillReducers } from "../skill/deleteSkillReduc";
import { GetSkillReducers } from "../skill/getSkillReduc";
import { IdSkillReducers } from "../skill/idSkillReduc";
import { UpdateSkillReducers } from "../skill/updateSkillReduc";
import { IdWorkerReducers } from "../worker/idWorkerReducer";
import { GetWorkerReducers } from "../worker/getWorkerReducer";
import { UpdateWorkerReducers } from "../worker/updateWorkerReducers";
import { DeleteWorkerReducers } from "../worker/deleteWorkerReducers";
import { DeletePerusahaanReducers } from "../perusahaan/deletePerusahaanReducers";
import { InsertPortoReducers } from "../portofolio/addPortoReduc";
import { InsertSkillReducers } from "../skill/addSkillReduc";
import { InsertPengalamanReducers } from "../pengalaman/addPengalamanReduc";
import RegisterWorkerReduc from "../auth/registerWorkerReduc";
import RegisterPerusahaanReduc from "../auth/registerPerusahaanReduc";
import LoginReduc from "../auth/loginReduc";
import { PayloadWorkerReducers } from "../worker/payloadWorkerReduc";
// import LoginPerusahaanReduc from "../auth/loginPerusahaanReduc";

const rootReducers = combineReducers({
  // auth
  registerWorker: RegisterWorkerReduc,
  registerPerusahaan: RegisterPerusahaanReduc,
  login: LoginReduc,
  // loginPerusahaan: LoginPerusahaanReduc,

  //worker
  getWorker: GetWorkerReducers,
  idWorker: IdWorkerReducers,
  updateWorker: UpdateWorkerReducers,
  deleteWorker: DeleteWorkerReducers,
  payloadWorker: PayloadWorkerReducers,

  //perusahaan
  getPerusahaan: GetPerusahaanReducers,
  idPerusahaan: IdPerusahaanReducers,
  updatePerusahaan: UpdatePerusahaanReducers,
  deletePerusahaan: DeletePerusahaanReducers,

  //porto
  getPorto: GetPortoReducers,
  idPorto: IdPortoReducers,
  updatePorto: UpdatePortoReducers,
  deletePorto: DeletePortoReducers,
  addPorto: InsertPortoReducers,

  //skill
  getSkill: GetSkillReducers,
  idSkill: IdSkillReducers,
  updateSkill: UpdateSkillReducers,
  deleteSkill: DeleteSkillReducers,
  addSkill: InsertSkillReducers,

  //pengalaman
  getPengalaman: GetPengalamanReducers,
  idPengalaman: IdPengalamanReducers,
  updatePengalaman: UpdatePengalamanReducers,
  deletePengalaman: DeletePengalamanReducers,
  addPengalaman: InsertPengalamanReducers,

  //chat
  getChat: GetChatReducers,
  idChat: IdChatReducers,
  updateChat: UpdateChatReducers,
  deleteChat: DeleteChatReducers,
});

export default rootReducers;
