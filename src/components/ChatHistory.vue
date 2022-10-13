<script setup lang="ts">
import { ref, computed } from "vue";
import Swal from "sweetalert2";

import { getGroups, getAuth } from "@/firebase";
const {
  addGroup,
  removeGroup,
  setFocusedGroup,
  groups,
  focusedGroup,
  searchValue,
} = getGroups();
const { user } = getAuth();

async function NewGroup() {
  const { value: text } = await Swal.fire({
    target: ".home-container",
    icon: "info",
    input: "text",
    inputLabel: "Create a new group",
    inputPlaceholder: "The name of the group",
    showCancelButton: true,
    confirmButtonText: "Create",
  });

  if (text) {
    addGroup(text);
  }
}

const filterGroups = computed(() => {
  if (groups.value !== undefined) {
    return groups.value.filter(function (item) {
      return (
        item.name.toLowerCase().indexOf(searchValue.value.toLowerCase()) > -1
      );
    });
  } else {
    return {};
  }
});

function PromptRemoveGroup(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "Are you sure that you want to delete this group, forever?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "The group is now deleted.", "success");
      removeGroup(id);
    }
  });
}
</script>

<template>
  <div class="chathistory-container">
    <div
      class="userchat"
      v-for="(group, index) in filterGroups"
      :key="index"
      @click="setFocusedGroup(group.uid)"
      :class="{ active: focusedGroup == group.uid }"
    >
      <div class="image">
        {{ group.name.substring(0, 1).toUpperCase() }}
      </div>
      <div class="userdata">
        <h1>{{ group.name }}</h1>
        <span
          class="mdi mdi-minus"
          v-if="group.owner == user.uid"
          @click="PromptRemoveGroup(group.id)"
        ></span>
      </div>
    </div>
  </div>
  <div class="userchat new" @click="NewGroup()">
    <div class="image">+</div>
    <div class="userdata">
      <h1>New group</h1>
    </div>
  </div>
</template>

<style scoped>
.chathistory-container {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  margin-top: 25px;
  height: calc(100% - 233px - 2rem);
  overflow: scroll;
}

.new {
  margin-top: auto;
}

.userchat {
  padding: 10px 20px;

  display: flex;
  column-gap: 25px;
}

.userchat .image {
  border-radius: 100%;
  width: 64px;
  height: 64px;

  background: #65649d;

  color: #fff;
  font-family: "Lato", sans-serif;
  font-size: 32px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
}

.userdata {
  display: flex;
  align-items: center;
  flex-direction: row;

  transition: 300ms;

  width: calc(100% - 89px);
}

.userchat:hover {
  cursor: pointer;
  background: #3c3b6c;
  transition: 300ms;
}

.userchat.active {
  background: #3c3b6c;
}

.userchat h1 {
  margin: 0;

  color: #fff;
  font-family: "Lato", sans-serif;
  font-size: 1.75rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.userchat h2 {
  margin: 0;

  color: #ddd;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;

  width: 90%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.userdata .mdi-minus {
  margin-left: auto;

  width: 1.3rem;
  height: 1.3rem;

  padding: 8px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 1.3rem;

  transition: 300ms;
}

.userdata .mdi-minus:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ff8f8f;

  transition: 300ms;
}
</style>
