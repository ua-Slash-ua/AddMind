-- AddForeignKey
ALTER TABLE "ModelUserMeta" ADD CONSTRAINT "ModelUserMeta_main_id_fkey" FOREIGN KEY ("main_id") REFERENCES "ModelUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
