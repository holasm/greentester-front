<template lang=pug>
.md-html
  .md-html-copy Copy
  .md-html-content {{ html }}
</template>

<script>
export default {
  name: 'md-html',
  props: {
    html: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang=scss>
.md-html-copy{
  position: absolute;
  right: 0;
  top: 12;
  margin-right: 40px;
  border:  1px solid #aaa;
  display: inline-block;
  padding: 2px 10px;
  font-size: 0.8em;
  line-height: 20px;
  cursor: pointer;
  &:hover{
    background: #ededed;
    cursor: pointer;
  }
  &:active{
    background: #ddd;
    cursor: pointer;
  }
}
.md-html-content{
  padding-right: 60px;
}
</style>
