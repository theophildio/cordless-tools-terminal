import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateToolModal = ({id, tools, refetch}) => {
  const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm();

	const imgStorageKey = '178176aaaa274d2b6409cb0a2dda70b2';

	const onSubmit = async data => {
		const image = data.image[0];
		const formData = new FormData();
		formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
		fetch(url, {
			method: 'POST',
			body: formData
		})
		.then(res => res.json())
		.then(result => {
			if(result.success) {
				const img = result.data.url;
				const updateTool = {
					name: data.name,
					quantity: data.quantity,
					price: data.price,
          description: data.desc,
					img: img
				}
				// Send to db
				fetch(`https://cordless-tools-terminal.herokuapp.com/tool/${id}`, {
					method: 'PUT',
					headers: {
						'content-type': 'application/json',
						authorization: `Bearer ${localStorage.getItem('accessToken')}`
					},
					body: JSON.stringify(updateTool)
				})
				.then(res => res.json())
				.then(inserted => {
					if(inserted.insertedId) {
            console.log(inserted);
						toast.success('Tool updated!');
						reset();
					}
					else {
						toast.error('Failed to update!');
					}
				})
			}
		})
  }
  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg capitalize">Update tool</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <label className="label" htmlFor="image">
              Upload Tool Image
            </label>
            <div className="form-control w-full">
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is required.",
                  },
                })}
                type="file"
                className="input w-full"
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Tool Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Tool Name is required.",
                  },
                })}
                type="text"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Update Quantity</span>
              </label>
              <input
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is required.",
                  },
                })}
                type="text"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Update Price</span>
              </label>
              <input
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is required.",
                  },
                })}
                type="number"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Update Description</span>
              </label>
              <textarea
                {...register("desc", {
                  required: {
                    value: true,
                    message: "Descripton is required.",
                  },
                })}
                type="text"
                className="textarea textarea-bordered w-full"
              />
              <label className="label">
                {errors.desc?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.desc.message}
                  </span>
                )}
              </label>
            </div>
            <input
              type="submit"
              value="Update"
              className="input modal-action justify-center bg-neutral text-base-100 uppercase cursor-pointer w-full input-bordered"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToolModal;