/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ImageCreateNestedManyWithoutUsersInput } from "./ImageCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fullName?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  preferences?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => ImageCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ImageCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  images?: ImageCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => LikeCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LikeCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LikeCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  likes?: LikeCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
