import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditProfilePekerjaComponent from "../../component/profilePekerja/editProfilePekerja";
import UpdateWorkerAction from "../../storage/actions/worker/updateWorkerAction";

const EditProfilePekerjaPages = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const workerDetail = useSelector((state) => {
    if (state.workerId.data.length > 0) {
      return state.workerId.data[0];
    } else {
      return {
        name: "",
        job: "",
        location: "",
        description: "",
        skill: "",
        pengalamanKerja: "",
        posisi: "",
        namaPerusahaan: "",
        bulan: "",
        tahun: "",
        deskripsi: "",
      };
    }
  });

  const [editWorker, setEditWorker] = useState({
    name: workerDetail.name || "",
    job: workerDetail.job || "",
    location: workerDetail.location || "",
    description: workerDetail.description || "",
    skill: workerDetail.skill || "",
    pengalamanKerja: workerDetail.pengalamanKerja || "",
    posisi: workerDetail.posisi || "",
    namaPerusahaan: workerDetail.namaPerusahaan || "",
    bulan: workerDetail.bulan || "",
    tahun: workerDetail.tahun || "",
    deskripsi: workerDetail.deskripsi || "",
  });

  const [photo, setPhoto] = useState("");
  const [image, setImage] = useState("");

  const handleEdit = (e) => {
    setEditWorker({
      ...editWorker,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    setPhoto(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const editForm = new FormData();
    editForm.append("name", editWorker.title);
    editForm.append("job", editWorker.ingredients);
    editForm.append("location", editWorker.category_id);
    editForm.append("skill", editWorker.skill);
    editForm.append("pengalamanKerja", editWorker.skill);
    editForm.append("posisi", editWorker.skill);
    editForm.append("namaPerusahaan", editWorker.skill);
    editForm.append("bulan", editWorker.skill);
    editForm.append("tahun", editWorker.skill);
    editForm.append("deskripsi", editWorker.skill);

    dispatch(UpdateWorkerAction(editForm, id));
  };

  return (
    <EditProfilePekerjaComponent
      nameVal={editWorker.name}
      nameChange={handleEdit}
      jobVal={editWorker.job}
      jobChange={handleEdit}
      locationVal={editWorker.location}
      locationChange={handleEdit}
      skillVal={editWorker.skill}
      skillChange={handleEdit}
      pengalamanKerjaVal={editWorker.pengalamanKerja}
      pengalamanKerjaChange={handleEdit}
      posisiVal={editWorker.posisi}
      posisiChange={handleEdit}
      namaPerusahaanVal={editWorker.namaPerusahaan}
      namaPerusahaanChange={handleEdit}
      bulanVal={editWorker.bulan}
      bulanChange={handleEdit}
      tahunVal={editWorker.tahun}
      tahunChange={handleEdit}
      deskripsiVal={editWorker.deskripsi}
      deskripsiChange={handleEdit}
      photo={photo}
      image={image}
      handlePhoto={handlePhoto}
      onSubmit={onSubmit}
    />
  );
};

export default EditProfilePekerjaPages;
