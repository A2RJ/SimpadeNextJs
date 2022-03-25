import { Button, createStyles, Group, Modal, TextInput } from "@mantine/core";
import { useState } from "react";

export default function index() {
  // const [opened, setOpened] = useState(false);

  let opened = false;

  const setOpened = (value) => {
    opened = value;
  };

  return (
    <>
      <h1>Pelayanan</h1>
      <TextInput
        style={{
          wrapper: "",
          defaultVariant: "",
          filledVariant: "",
          unstyledVariant: "",
          invalid: "",
          disabled: "",
          icon: "",
          withIcon: "",
          input: "",
          rightSection: "",
        }}
        required
        label="Email"
        placeholder="your@email.com"
      />
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button variant="primary" onClick={() => setOpened(true)}>
          Open Modal
        </Button>
      </Group>
    </>
  );
}
