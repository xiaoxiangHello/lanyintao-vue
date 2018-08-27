<template>
        <div class="pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 30]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
  </div>
</template>
<script>
export default {
        props: {
            total: {
                type: Number,
                default: 0
            },
            currentPage: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                pageSize: 10
            };
        },
        methods: {
            handleSizeChange(val) {
                this.pageSize = val;
                this.$emit('search', 1, this.pageSize);
            },
            handleCurrentChange(val) {
                pageNum = val;
                this.$emit('search', pageNum, this.pageSize);
            }
        }
    };
</script>
