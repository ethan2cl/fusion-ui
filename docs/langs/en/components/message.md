---
title: Message
lang: en
---

<script setup lang="ts">
  import props from "../../../example/message/description/en-props.ts";
  import slots from "../../../example/message/description/en-slots.ts";
</script>

# Message

It is often used for feedback prompts after active operation. When the mouse hovers, the message does not disappear. After the mouse is moved out, the countdown begins, and the message automatically disappears after the countdown.

## Basic Usage

Call the ```FnMessage``` method and pass in the ```message``` parameter.
<demo src="../../../example/message/base.vue" />

## status

It is used to display "success, warning, message, danger (error)" operation feedback.

<demo src="../../../example/message/type.vue" />

## Closing time

The delay of automatic shutdown is in milliseconds. If you don't close it, you can write 0.

<demo src="../../../example/message/time.vue" />

## Manually close

Show the close button

<demo src="../../../example/message/close.vue" />

## Close the logo

The `showIcon` attribute controls the visibility of the logo icon.

<demo src="../../../example/message/icon.vue" />

## Attributes

<table-block type="propsEn" :data="props" />
