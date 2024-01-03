---
title: Text Field
lang: en
---

<script setup lang="ts">
  import props from "../../../example/text-field/description/en-props.ts";
</script>

# Text Field

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

## Basic

The `TextField` comes with the form control label, input and supporting text.

The component support three variants: outlined (default), filled and standard.

<demo src="../../../example/text-field/basic.vue" />

## Form props

Standard form attributes are supported e.g. `required`, `disabled`, `type`, `placeholder` etc.

<demo src="../../../example/text-field/form-props.vue" />

## Size

The are small, medium, and large (default) three size to choose.

<demo src="../../../example/text-field/size.vue" />

> The `label` will be hide automatically for `Filled` and `Standard` variants due to the limit of height.

## Label

Set `label` to enable the internal label of `TextField`. Also, you can use an external label with the help of `FormLabel`

<demo src="../../../example/text-field/label.vue" />

## Icon

You can add internal icon to the `TextField` via the name slots, or customize the external icon by yourself.

<demo src="../../../example/text-field/icon.vue" />

### More flexiable

It more flexiable use icon with other component

<demo src="../../../example/text-field/icon-flexiable.vue" />

## Color

Use `color` prop to change the focus color.

<demo src="../../../example/text-field/color.vue" />

## Error and supporting text

The `error` accept a `Boolean` value to indicate the error state.

Also, the `supporting-text` can be set to provider more information.

<demo src="../../../example/text-field/error.vue" />

## Attributes

<data-table type="props" lang="en" :data="props" />
