import { Get, Post, Body, Param, Delete, Controller } from '@nestjs/common';
import { TodoRepository } from '@nx-clean/todo-domain';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoRepository) {}

  @Post()
  create(@Body() { title }: CreateTodoDto) {
    return this.todoService.addTodo(title);
  }

  @Get()
  findAll() {
    return this.todoService.getAllTodos();
  }

  @Get('completed')
  findAllCompleted() {
    return this.todoService.getCompletedTodos();
  }

  @Post('completed')
  markAllAsCompleted() {
    return this.todoService.markAllTodosAsCompleted();
  }

  @Post('active')
  markAllAsActive() {
    return this.todoService.markAllTodosAsActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.getTodoById(id);
  }

  @Post(':id/active')
  markTodoAsActive(
    @Param('id') id: string,
    @Body('isCompleted') isCompleted: boolean
  ) {
    return this.todoService.markTodoAsCompleted(id, isCompleted);
  }

  @Post(':id/completed')
  markTodoAsCompleted(
    @Param('id') id: string,
    @Body('isCompleted') isCompleted: boolean
  ) {
    return this.todoService.markTodoAsCompleted(id, isCompleted);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.removeTodo(id);
  }
}
