function Modal(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <>
        <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="70%"
        footer={null}
      >
        sdfsdfdsfsdfdfsdfdf

      </Modal>
        </>
    )
}